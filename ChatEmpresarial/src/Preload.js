/*--View--*/
import React, { Component } from 'react'; 
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { checkLogin } from './actions/AuthActions'; /*--Login verified--*/;

export class Preload extends Component{ /* screem */

    static navigationOptions = {
        title:'',
        header:null
    }

    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>Carregando...</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container:{
        margin:10
    }

});

const mapStateToProps = (state) => {
    return{

    };
};

const PreloadConnect = connect(mapStateToProps, { checkLogin })(Preload); /* Connection 2 parameters in Preload screem*/
export default PreloadConnect;