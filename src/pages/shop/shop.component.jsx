import React from 'react';
import { Route } from 'react-router-dom';
import {connect} from 'react-redux';
import {updateCollections} from '../../redux/shop/shop.actions';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import {firestore, convertSnapshotToMap} from '../../firebase/firebase.utils';
import { bindActionCreators } from 'redux';

class ShopPage extends React.Component {

  unsubscribeFromSnapshot = null;

  componentDidMount(){
    const {updateCollections} = this.props;
    const collRef = firestore.collection('collections');
    collRef.onSnapshot(async snapshot => {
      const converted = convertSnapshotToMap(snapshot);

      updateCollections(converted);
    });
  }

  render() {
    const {match} = this.props;
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
      </div>
    );

  }
}


const mapDispatchToProps = dispatch => ({
  updateCollections: (collectionMap) => dispatch(updateCollections(collectionMap))
})
export default connect(null, mapDispatchToProps)(ShopPage);
