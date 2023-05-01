import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const baseUrl = "https://api.otaviolube.com";

export default function CardFilme({ filme }){
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: baseUrl + filme.poster.data.attributes.url}}/>
              <Text style={styles.title}>{filme.titulo}</Text>
              <Text style={styles.sinopse}>{filme.sinopse}</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.btnText}>Comprar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {   
        backgroundColor: 'orange',
        margin: 15,    
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: '80px',
        height: '120px',
        resizeMode: 'cover',
        marginBottom: 10
        
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    sinopse: {
        marginBottom: 10
    },
    button: {
        height: 50,
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})
