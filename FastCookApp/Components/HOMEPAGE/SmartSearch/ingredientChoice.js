import { MultipleSelectList } from 'react-native-dropdown-select-list'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { GetIngridient } from '../../../Redux/Slices/GetIngridientsAsynckThunck';
import { Colors } from '../../Colors';

const IngredientChoice = ({selectedIng, setSelectedIng, ingredientChoiceid, setIngridientChoiceId}) => {
    const {getIngrigient} = useSelector(state=>state.getIngrigient)
    
    const ids = []
    const dispatch = useDispatch()
        useEffect(()=>{
            dispatch(GetIngridient())
   }, [])
  

  console.log(getIngrigient,"dataaaaaaaaaa ingredient")
  console.log("selected name",selectedIng )
  console.log("selected id", ingredientChoiceid)

  return(
    <MultipleSelectList 

   boxStyles={{backgroundColor: Colors.boxGrey, borderColor: Colors.boxGrey, borderRadius:0, marginVertical: 4 }}
   labelStyles={{fontSize: 20}}
   label="Ingredients"
    data={getIngrigient.map(item => item.name)} 
   
    
    setSelected={(selectedItem, index) => {
  
        setSelectedIng(selectedItem)
        
    }}
    onSelect={()=>{
        selectedIng.map((item)=>{
            console.log("name", item);
            getIngrigient.map((ing)=>{
                if(item === ing.name){
                    
                    ids.push(ing.id)
                    console.log("yes" ,ing.id);
                    console.log("ids", ids);
                    setIngridientChoiceId(ids)
                }
            })
        })
        console.log(getIngrigient);
    }}
    // setSelected={(val)=>setSelected(val)}
    save={getIngrigient.map(item => item.id)}
    
        

    />
  )

};

export default IngredientChoice