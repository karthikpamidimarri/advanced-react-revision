import React from 'react';
import PropTypes from 'prop-types';

const storeProvider = ((extraProps)=> (Component) =>{
    return class extends React.Component {
        static displayName = `${Component.name}Container`;
        static contextTypes = {
            store: PropTypes.object
        };

        render(){
            return(
                <Component {...this.props}
                           {...extraProps(this.context.store,this.props)}
                           store={this.context.store}/> //Reading from the context and placing the store object as props
            )
        }
    };
});
export default storeProvider;