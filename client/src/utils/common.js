export const updateFavorites=(id,favorites)=>{
    console.log("favourites:",favorites);
    console.log("id:",id);
    if (favorites?.includes(id)) {
        return favorites?.filter((resId)=>resId!==id)
    }
    else{
        return[...favorites,id]
    }
}

export const checkFavorites=(id,favorites)=>{
    return favorites?.includes(id)?"#ff6055":"white"     
}

export const validateString=(value)=>{
    return value?.length<3||value===null?"must have three characters":null
}