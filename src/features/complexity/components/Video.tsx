type VideoProps = {
    src: string;
    title: string;
};

const Video = ({ src, title }: VideoProps) => {
    return (
        <iframe
            width="560"
            height="315"
            src={src}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
        />
    );
};

export default Video;
