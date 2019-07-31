import React from 'react'
import './collection-item.styles.scss';

const CollectionItem = ({id, name, price, imageUrl}) => (
  <div className="collection_item">
    <div 
      className="collection_item--image" 
      style={{backgroundImage: `url(${imageUrl})`}}
    />
    <div className="collection_item--footer">
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
  </div>
)

export default CollectionItem
