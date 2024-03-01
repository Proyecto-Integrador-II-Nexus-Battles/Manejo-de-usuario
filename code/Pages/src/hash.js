import bcrypt from  'bcrypt';


export const hash= async(password)=>{
    const hash = await bcrypt.hash(password);
    return hash;
}