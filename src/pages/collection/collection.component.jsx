import React from 'react';
import { connect } from 'react-redux';
import collectionItem from '../../components/collection-item/collection-item.component';
import { selectCollections } from '../../redux/shop/shop.selectors';

import './collection.styles.scss';

const CollectionPage = ({ match }) => (
	<div className='collection-page'>
		<h2>COLLECTION PAGE</h2>
		<h6>{match.params.collectionId}</h6>
	</div>
);

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollections(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
