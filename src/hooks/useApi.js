/**
 * useApi Hook
 * React hook for making API calls with loading and error states
 */

import { useState, useCallback, useRef, useEffect } from 'react';

/**
 * Hook for handling API request states
 * @param {Function} apiFunction - The API function to call
 * @param {Object} options - Configuration options
 * @returns {Object} - { data, loading, error, execute, reset }
 */
export const useApi = (apiFunction, options = {}) => {
    const { immediate = false, initialData = null, onSuccess, onError } = options;

    const [data, setData] = useState(initialData);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Track mounted state to prevent state updates after unmount
    const mountedRef = useRef(true);

    useEffect(() => {
        mountedRef.current = true;
        return () => {
            mountedRef.current = false;
        };
    }, []);

    const execute = useCallback(
        async (...args) => {
            try {
                setLoading(true);
                setError(null);

                const result = await apiFunction(...args);

                if (mountedRef.current) {
                    setData(result);
                    onSuccess?.(result);
                }

                return result;
            } catch (err) {
                if (mountedRef.current) {
                    setError(err);
                    onError?.(err);
                }
                throw err;
            } finally {
                if (mountedRef.current) {
                    setLoading(false);
                }
            }
        },
        [apiFunction, onSuccess, onError]
    );

    const reset = useCallback(() => {
        setData(initialData);
        setError(null);
        setLoading(false);
    }, [initialData]);

    // Execute immediately if configured
    useEffect(() => {
        if (immediate) {
            execute();
        }
    }, [immediate, execute]);

    return { data, loading, error, execute, reset };
};

/**
 * Hook for handling paginated API requests
 */
export const usePaginatedApi = (apiFunction, options = {}) => {
    const { pageSize = 10, initialPage = 1 } = options;

    const [items, setItems] = useState([]);
    const [page, setPage] = useState(initialPage);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const mountedRef = useRef(true);

    useEffect(() => {
        mountedRef.current = true;
        return () => {
            mountedRef.current = false;
        };
    }, []);

    const loadMore = useCallback(async () => {
        if (loading || !hasMore) return;

        try {
            setLoading(true);
            setError(null);

            const result = await apiFunction({ page, pageSize });

            if (mountedRef.current) {
                const newItems = result.data || result;
                setItems((prev) => [...prev, ...newItems]);
                setHasMore(newItems.length >= pageSize);
                setPage((prev) => prev + 1);
            }
        } catch (err) {
            if (mountedRef.current) {
                setError(err);
            }
        } finally {
            if (mountedRef.current) {
                setLoading(false);
            }
        }
    }, [apiFunction, page, pageSize, loading, hasMore]);

    const refresh = useCallback(async () => {
        setItems([]);
        setPage(initialPage);
        setHasMore(true);
        setError(null);

        try {
            setLoading(true);
            const result = await apiFunction({ page: initialPage, pageSize });

            if (mountedRef.current) {
                const newItems = result.data || result;
                setItems(newItems);
                setHasMore(newItems.length >= pageSize);
                setPage(initialPage + 1);
            }
        } catch (err) {
            if (mountedRef.current) {
                setError(err);
            }
        } finally {
            if (mountedRef.current) {
                setLoading(false);
            }
        }
    }, [apiFunction, initialPage, pageSize]);

    return { items, loading, error, hasMore, loadMore, refresh };
};

export default useApi;
