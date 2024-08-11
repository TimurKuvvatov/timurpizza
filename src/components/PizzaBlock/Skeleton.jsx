import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
    <div className="pizza-block__wrapper">
        <ContentLoader
        className="pizza-block"
        speed={1}
        width={280}
        height={465}
        viewBox="0 0 280 465"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <circle cx="134" cy="130" r="125" />
        <rect x="0" y="282" rx="10" ry="10" width="280" height="20" />
        <rect x="0" y="316" rx="10" ry="10" width="280" height="88" />
        <rect x="0" y="414" rx="10" ry="10" width="90" height="30" />
        <rect x="128" y="414" rx="20" ry="20" width="152" height="45" />
    </ContentLoader>
    </div>
    
);

export default Skeleton;
