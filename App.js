
import { StyleSheet, Text, View,Button,FlatList,Image,TouchableOpacity} from "react-native";
import React,{useState} from 'react'


const App = () => {

  const [todos, setTodos] = useState([
    {
      id: 1,
      name: 'Bertie Yates',
      age: 29,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
    },
    {
      id: 2,
      name: 'Hester Hogan',
      age: 32,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
    },
    {
      id: 3,
      name: 'Larry Little',
      age: 36,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    },
    {
      id: 4,
      name: 'Sean Walsh',
      age: 34,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    },
    {
      id: 5,
      name: 'Lola Gardner',
      age: 29,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    },
    ]);
    const pressHandler = (id,name)=>{
      console.log(id)
      alert(id)
    }
    return(

  <View style={page.container}>
    {/* <Text style={flattenStyle}>React Native</Text> */}
    
    <View style={page.code}>
      <Text  style={page.bir}>5 Birthdays Today</Text>
    <FlatList
        style={page.fixToText}
            keyExtractor={item=>item.id}
            data={todos}
            renderItem={({item})=>{return(
              <>
              
                <TouchableOpacity onPress={()=>pressHandler(item.name)}>
                  
                <Image source={{ uri: `${item.image}` }} style={{ width: 75, height: 75, borderRadius: 37.5 }} />
                <Text style={page.nam}>{item.name} -{item.age}  Years  </Text>
               
                </TouchableOpacity>             
</>

            )}}
         />

      
      <Button
        title="clear All"
        color="#f194ff"
        style={page.but}
      />
    </View>
    
  </View>
    )
};

const page = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor:'#ff69b4',
    alignItems: "center"
  },
  text: {
    color: "#000",
    fontSize: 14,
    fontWeight: "bold"
  },
  code: {
    marginTop: 40,
    padding: 12,
    borderRadius: 8,
    color: "#666",
    width:400,
    height:750,
    backgroundColor: `#fffff0`
  }
  ,
  but:{
    
    flex: 1,
    justifyContent: 'center',
  },
  nam:{
    padding:20
  },
  bir:{
    fontSize:30
  },
  fixToText: {
    flexDirection: 'row',
   
  },
});





export default App;