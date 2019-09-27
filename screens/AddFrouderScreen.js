import React,{Component} from 'react';
import {Text, View,Image, StyleSheet, TextInput, Button, ScrollView,SafeAreaView , Alert, TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-picker' ;

import Localization from "../component/Localization";

import database from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';

import uuid from 'uuid/v4';

let base = database();

let addItem = item => {
    base.ref('/items').push({
        firstname: item.name,
        lastname: item.lastname ,
        phone: item.phone ,
        url: item.url ,
        card: item.card ,
        shortdesc: item.shortdesc,
        desc: item.desc ,
    });
};


// Set color constants START
let placeHolderColor= '#909497';
let inputText= '#25282b';
// Set color constants END

class AddFrouderScreen extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;

        return {
            title: Localization().addfrouder_title ,
        };
    };
    componentDidMount() {
      var stor =   storage().ref("post/girls.jpg");
        // this.setState({froudImgUri:stor});
        //
        stor.getDownloadURL()
            .then((url) => {
                this.setState({froudImgUri: url});
            });
    }

    constructor(props) {
        super(props);
        this.state = {
            froudName: '',
            froudNameLast: '',
            froudNumber: '',
            froudUrl: '',
            froudCreditCard: '',
            froudShortDescription: '',
            froudDescription: '',
            froudImgPath:'',
            froudImgUri:'',
            froudImgUrii:'',
            uploading: false,
            froudImgName:"",
            lang: Localization(),
            error: [
                {name:''},
                {lastName:''},
                {phone:''},
                {url:''},
                {cardNumber:''},
                {shortDesc:' shDec'},
                {desc:'desc'},
            ],
            errorShortDesc:'',
        };

    };


    clearInput= ()=>{
        this.setState({
            froudName: '',
            froudNameLast: '',
            froudNumber: '',
            froudUrl:'',
            froudCreditCard: '',
            froudShortDescription: '',
            froudDescription: '',
            froudImgPath:''
        })
    };
    handlerChangeName  = (val)=>{
        this.setState({
            froudName: val
        });
        this.validateForm(val, 'name',true);

    };
    handlerChangeNameLast = (val)=>{
        this.setState({
            froudNameLast: val
        });
        this.validateForm(val, 'lastName',true);
    };
    handlerChangeNumber = (val)=>{
        this.setState({
            froudNumber: val
        });
        this.validateForm(val, 'phone',false);
    };
    handlerChangeUrl = (val)=>{
        this.setState({
            froudUrl: val
        });
        this.validateForm(val, 'url','');
    };
    handlerCreditCardNumber = (val)=>{
        this.setState({
            froudCreditCard: val
        });
        this.validateForm(val, 'cardNumber',false);
    };

    handlerShortDescription = (val)=>{
            this.setState({
                froudShortDescription: val
            });
        this.validateForm(val, 'shDesc',true);
    };

    handlerDescription = (val)=>{
            this.setState({
                froudDescription: val
            });
        this.validateForm(val, 'desc',true);
    };

    checkAllInputFields=()=>{
        let  checkInpTut = [ this.state.froudName,
            this.state.froudNameLast,
            this.state.froudNumber,
            this.state.froudUrl,
            this.state.froudCreditCard,
            this.state.froudShortDescription,
            this.state.froudDescription];
        let inputKeys = ['name','lastName','phone','url','cardNumber','shDesc','desc'];
        let statusInput = [];
        for (let i=0 ; checkInpTut.length > i ; i++ ){
            statusInput.push(this.validateForm(checkInpTut[i],inputKeys[i]));
        }

        let checkIsAllTrue= statusInput.every(function (elem) {
           return elem === true;
        });
        return checkIsAllTrue;
    };

    submitInformation = () => {
        let statusForm = this.checkAllInputFields();
        const lang = this.state.lang;
        if (statusForm=== true) {
            addItem({
                'name': this.state.froudName,
                'lastname': this.state.froudNameLast,
                'phone': this.state.froudNumber,
                'url': this.state.froudUrl,
                'card': this.state.froudCreditCard,
                'shortdesc': this.state.froudShortDescription,
                'desc': this.state.froudDescription});
            Alert.alert(lang.addfrouder_form_success,lang.addfrouder_form_success_details);
            this.clearInput();
        }else{
            Alert.alert(lang.addfrouder_form_error,lang.addfrouder_form_error_details);
        }

    };
    validateForm=(item,type,str)=>{
        item = item.replace(/ /g, "");
        if (str===true){
            item = item.replace(/[^A-Za-zА-Яа-яЁё]/g, "");
        }else if(str===false){
            item= item.replace(/[^0-9.]/g, "");
        }else {
            console.log('URL');
        }

        console.log(item);
        const lang = this.state.lang;
        let messages = {
            changName: lang.addfrouder_form_message_warn_name,
            changLast: lang.addfrouder_form_message_warn_lastName,
            changNumber: lang.addfrouder_form_message_warn_phone,
            changUrl: lang.addfrouder_form_message_warn_url,
            changCardNumber: lang.addfrouder_form_message_warn_cardNumber,
            changShortDesc: lang.addfrouder_form_message_warn_shortDesc,
            changDesc: lang.addfrouder_form_message_warn_desc,
        };
        let status = null;
        let oldStae = this.state.error;

        switch (type) {
            case 'name':
                if (item.length >= 3){
                    status = '';
                    oldStae.name = status ;
                }else{
                    status = messages.changName;
                    oldStae.name =status ;

                    this.setState({error: oldStae})
                }
                break;
            case 'lastName':
                if (item.length >= 3 ){
                    status = '';
                    oldStae.lastName = status ;
                }else{
                    status = messages.changLast;
                    oldStae.lastName =status ;

                    this.setState({error: oldStae})
                }
                break;
            case 'phone':
                if (item.length >= 10){
                    status = '';
                    oldStae.phone = status ;
                }else{
                    status = messages.changNumber;
                    oldStae.phone =status ;

                    this.setState({error: oldStae})
                }
                break;
            case 'url':
                if (item.length >= 33){
                    status = '';
                    oldStae.url = status ;
                }else{
                    status = messages.changUrl;
                    oldStae.url =status ;

                    this.setState({error: oldStae})
                }
                break;
            case 'cardNumber':
                if (item.length >= 16){
                    status = '';
                    oldStae.cardNumber = status ;
                }else{
                    status = messages.changCardNumber;
                    oldStae.cardNumber =status ;

                    this.setState({error: oldStae})
                }
                break;
            case 'shDesc':
                if (item.length >= 10){
                    status = '';
                    oldStae.shortDesc = status ;
                }else{
                    status = messages.changShortDesc;
                    oldStae.shortDesc =status ;

                    this.setState({error: oldStae})
                }
                break;

            case 'desc':
                if (item.length >= 50){
                    status = '';
                    oldStae.desc = status ;
                }else{
                    status = messages.changDesc;
                    oldStae.desc =status ;

                    this.setState({error: oldStae})
                }
                break;
            default:
                status = 'Eroor';

        }
        if (status ===''){
            return true;
        }
        else{
            return false;
        }
    };
    handlerAddImage=()=>{
      console.log('Clicked on add image');
        var options = {
            title: 'Select Image',
            customButtons: [
                { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
            ],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.showImagePicker(options, response => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                alert(response.customButton);
            } else {
                let source = response;
                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };
                this.setState({
                    froudImgPath: source,
                    froudImgName: source.fileName
                });
                console.log('Hello world');
                console.log(source);

                console.log('Hello world');
            }
        });

        let war= '';


    };
    UploadImg=()=>{
        const file = this.state.froudImgPath.uri;
        console.log("file path is "+file);
        var filename = this.state.froudImgName;
        var storageRef = storage().ref();
        var metadata = {
            contentType: 'image/jpeg'
        };
        this.setState({ uploading: true });
        // storage()
        //     .putFile(this.state.froudImgPath)
        var uploadTask = storageRef.child('post/' + filename).put(file, metadata);


        uploadTask.on(storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
            function(snapshot) {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case storage.TaskState.PAUSED: // or 'paused'
                        console.log('Upload is paused');
                        break;
                    case storage.TaskState.RUNNING: // or 'running'
                        console.log('Upload is running');
                        break;
                }
            }, function(error) {

                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                    case 'storage/unauthorized':
                        // User doesn't have permission to access the object
                        console.log('User doesn\'t have permission to access the object');
                        break;

                    case 'storage/canceled':
                        // User canceled the upload
                        console.log('User canceled the upload');
                        break;

                    case 'storage/unknown':
                        // Unknown error occurred, inspect error.serverResponse
                        console.log('Unknown error occurred, inspect error.serverResponse');
                        break;
                }
            }, function() {
                // Upload completed successfully, now we can get the download URL
                uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                    console.log('File available at', downloadURL);
                });
            });
    };
    render(){
        return (
            <SafeAreaView style={styles.body}>
                <ScrollView>
                <View style={styles.container}>
                    <View style={styles.form_titles}>
                        <Text style={styles.title}>{this.state.lang.addfrouder_desc}</Text>
                    </View>

                    {this.state.error.name ?(
                        <Text style={styles.error}>{this.state.error.name} </Text>
                    ):(
                        null
                    )}

                     {this.state.error.lastName ?(
                    <Text style={styles.error}>{this.state.error.lastName} </Text>
                    ):(
                       null
                    )}

                    {this.state.error.phone ?(
                    <Text style={styles.error}>{this.state.error.phone} </Text>
                    ):(
                        null
                    )}

                    {this.state.error.url ?(
                        <Text style={styles.error}>{this.state.error.url} </Text>
                    ):(
                        null
                    )}

                    {this.state.error.cardNumber ?(
                        <Text style={styles.error}>{this.state.error.cardNumber} </Text>
                    ):(
                        null
                    )}

                    {this.state.error.shortDesc ?(
                        <Text style={styles.error}>{this.state.error.shortDesc} </Text>
                    ):(
                        null
                    )}

                    {this.state.error.desc ?(
                        <Text style={styles.error}>{this.state.error.desc} </Text>
                    ):(
                        null
                    )}


                    <TextInput style={styles.inputName}
                               onChangeText={this.handlerChangeName}
                               placeholder={this.state.lang.addfrouder_name}
                               placeholderTextColor={placeHolderColor}
                               value={this.state.froudName}
                               maxLength={10}
                    />
                    <TextInput style={styles.input}
                               onChangeText={this.handlerChangeNameLast}
                               placeholder={this.state.lang.addfrouder_lastname}
                               placeholderTextColor={placeHolderColor}
                               value={this.state.froudNameLast}
                               maxLength={20}
                    />
                    <TextInput style={styles.input}
                               onChangeText={this.handlerChangeNumber}
                               placeholder={this.state.lang.addfrouder_number}
                               placeholderTextColor={placeHolderColor}
                               value={this.state.froudNumber}
                               maxLength={20}
                               keyboardType={'number-pad'}
                    />
                    <TextInput style={styles.input}
                               onChangeText={this.handlerChangeUrl}
                               placeholder={this.state.lang.addfrouder_url}
                               placeholderTextColor={placeHolderColor}
                               value={this.state.froudUrl}
                               maxLength={40}
                    />
                    <TextInput style={styles.input}
                               onChangeText={this.handlerCreditCardNumber}
                               placeholder={this.state.lang.addfrouder_card}
                               placeholderTextColor={placeHolderColor}
                               value={this.state.froudCreditCard}
                               maxLength={25}
                               keyboardType={'numeric'}
                    />
                    <TextInput style={styles.inputShortDescription}
                               onChangeText={this.handlerShortDescription}
                               placeholder={this.state.lang.addfrouder_shortdesc}
                               placeholderTextColor={placeHolderColor}
                               value={this.state.froudShortDescription}
                               numberOfLines={4}
                               maxLength={90}
                               multiline={true}
                    />
                    <TextInput style={styles.inputDescription}
                               onChangeText={this.handlerDescription}
                               placeholder={this.state.lang.addfrouder_description}
                               placeholderTextColor={placeHolderColor}
                               value={this.state.froudDescription}
                               numberOfLines={4}
                               maxLength={8000}
                               multiline={true}
                    />
                    <View style={styles.button}>
                        <TouchableOpacity
                            style={styles.addImg_button}
                            onPress={this.handlerAddImage}
                        >
                            <Text style={styles.addImg_text}>
                                Add img
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity
                            style={styles.addImg_button}
                            onPress={this.UploadImg}
                        >
                            <Text style={styles.addImg_text}>
                                UploadImg
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <Image
                        source={{ uri: this.state.froudImgUri }}
                        style={{ width: 250, height: 250 }}
                    />
                    <Image
                        source={{ uri: this.state.froudImgUrii }}
                        style={{ width: 250, height: 250 }}
                    />
                    <View style={styles.button}>
                        <Button
                            onPress={this.submitInformation}
                            title={this.state.lang.sendinfo}
                            color="#5499C7"
                        />
                    </View>
                </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    body:{
        flex: 1,
        backgroundColor: '#e8ebf4',
    },
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 40,
        paddingBottom: 30,

    },
    title:{
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#554433',
        paddingBottom: 0,
    },
    input:{
        width: '70%',
        borderBottomColor: '#909497',
        borderBottomWidth: 2,
        color:  inputText,
        textAlign: 'left',
    },
    inputName:{
        width: '70%',
        borderBottomColor: '#909497',
        borderBottomWidth: 2,
        color:  inputText,
        textAlign: 'left',
    },
    form_titles:{
        paddingBottom: 25,
    },
    button:{
        paddingTop: 20,
        paddingBottom: 20,
    },
    inputShortDescription:{
        width: '70%',
        height: 60,
        borderBottomColor: '#909497',
        borderBottomWidth: 2,
        color:  inputText,
    },
    inputDescription:{
        width: '70%',
        height: 100,
        borderBottomColor: '#909497',
        borderBottomWidth: 2,
        color:  inputText,
    },
    error:{
      color:'#993322',
        textAlign: 'center'
    },
    addImg_button:{
        backgroundColor:"#5499C7",
        paddingTop: 5,
        paddingLeft: 10,
        paddingBottom: 5,
        paddingRight: 10,
    },
    addImg_text:{
        color:"#ffffff"
    }

});

export default AddFrouderScreen;
