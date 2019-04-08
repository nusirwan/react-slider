const settings = {
    infinite: true,
    speed: 600,
    arrows: false,
    rows: 2,
    slidesPerRow: 4,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                rows: 1,
                slidesPerRow: 1,
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 567,
            settings: {
                rows: 1,
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
};

export default settings;
