import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchAllRecipes= createAsyncThunk('products/fetchAllProducts',async()=>{
    const result=await axios.get('https://dummyjson.com/recipes')
    console.log(result);
    sessionStorage.setItem("allRecipies",JSON.stringify(result.data.recipes))
    return result.data.recipes
})
const recipeSlice=createSlice({
    name:'recipes',
    initialState:{
        allRecipes:[],
        dummyAllRecipes:[],
        loading:false,
        error:""
    },
    reducers:{
        searchRecipe:(state,searchKeyFromHeader)=>{
            state.allRecipes=state.dummyAllRecipes.filter(item=>item.cuisine.toLowerCase().includes(searchKeyFromHeader.payload))
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchAllRecipes.fulfilled,(state,apiResult)=>{
            state.allRecipes=apiResult.payload,
            state.dummyAllRecipes=apiResult.payload,
            state.loading=false,
            state.error=""
        })
        builder.addCase(fetchAllRecipes.pending,(state)=>{
            state.allRecipes=[],
            state.dummyAllRecipes=[],
            state.loading=true,
            state.error=""
        })
        builder.addCase(fetchAllRecipes.rejected,(state)=>{
            state.allRecipes=[],
            state.dummyAllRecipes=[],
            state.loading=false,
            state.error="API call Failed"
        })
    }

})


export const {searchRecipe}= recipeSlice.actions
export default recipeSlice.reducer