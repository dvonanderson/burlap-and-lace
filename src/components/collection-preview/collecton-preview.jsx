import React from 'react'
import CollectionItem from '../collection-item/collection-item.component';
import './collecton-preview.styles.scss';

const CollectionPreview = ({ title, items }) => (
  <div className='collection_preview'>
    <h1 className='collection_preview--title'>{ title.toUpperCase()}</h1>
    <div className='collection_preview--item'>
      {
        items.filter((item, idx) => idx < 4)
          .map(({id, ...otherItemProps}) => (
            <CollectionItem key={id} { ...otherItemProps }/>
        ))
      }
    </div>
  </div>
)

export default CollectionPreview;


// what would be the performance issue when it gets re-rendered