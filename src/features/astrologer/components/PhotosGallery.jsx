import { Image as ImageIcon } from 'lucide-react';

/**
 * PhotosGallery - Displays photos and certificates gallery
 */
const PhotosGallery = ({ photos = [] }) => {
    const defaultPhotos = [
        "https://img.freepik.com/premium-photo/horoscope-astrology-collage_23-2150519396.jpg",
        "https://img.freepik.com/premium-photo/spiritual-background-with-candles_1029471-558.jpg"
    ];

    const displayPhotos = photos.length > 0 ? photos : defaultPhotos;

    return (
        <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <ImageIcon className="w-5 h-5 text-primary" />
                    <h2 className="text-xl font-heading font-bold">Photos & Certificates</h2>
                </div>
                <button className="text-primary text-sm font-semibold hover:underline">View All</button>
            </div>
            <div className="grid grid-cols-3 gap-4 h-32 sm:h-40">
                {displayPhotos.slice(0, 2).map((photo, index) => (
                    <div key={index} className="rounded-xl overflow-hidden bg-muted relative group cursor-pointer">
                        <img
                            src={photo}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            alt={`Certificate ${index + 1}`}
                        />
                    </div>
                ))}
                <div className="rounded-xl overflow-hidden bg-muted relative group cursor-pointer flex items-center justify-center text-muted-foreground hover:bg-muted/80 transition-colors">
                    <span className="text-sm font-medium">+{Math.max(0, displayPhotos.length - 2)} More</span>
                </div>
            </div>
        </div>
    );
};

export default PhotosGallery;
