import { Helmet } from 'react-helmet-async';

const SeoMeta = ({
    title = "AstroConnect - Talk to Best Astrologers Online",
    description = "Consult verified astrologers online for Kundali, Horoscope, Tarot Reading, and Numerology. Get accurate predictions and remedies.",
    keywords = "astrology, astrologer, online astrology, talk to astrologer, chat with astrologer, horoscope, kundali, tarot, numerology, vedic astrology",
    url = "https://astroconnect.com/"
}) => {
    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={url} />

            {/* Open Graph Tags for Social Media */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content="website" />

            {/* Twitter Card Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
        </Helmet>
    );
};

export default SeoMeta;
