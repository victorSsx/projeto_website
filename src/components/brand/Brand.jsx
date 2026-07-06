import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './imports';
import './brand.css';

const brands = [
  { name: 'Google', logo: google, width: 72, height: 25 },
  { name: 'Slack', logo: slack, width: 97, height: 25 },
  { name: 'Atlassian', logo: atlassian, width: 114, height: 25 },
  { name: 'Dropbox', logo: dropbox, width: 122, height: 25 },
  { name: 'Shopify', logo: shopify, width: 85, height: 25 },
];

const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      {brands.map((brand, index) => (
        <div
          key={brand.name}
          data-reveal="fade-up"
          style={{ '--reveal-delay': `${index * 70}ms` }}
        >
          <img
            src={brand.logo}
            alt={`${brand.name} logo`}
            width={brand.width}
            height={brand.height}
            loading="lazy"
            decoding="async"
          />
        </div>
      ))}
    </div>
  )
}

export default Brand
