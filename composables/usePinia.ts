import { getActivePinia } from "pinia";

//根据store的id来取store值
export const getStoreById = (id: string) => {
    //@ts-expect-error _s is internal
    //console.log('usePinia',getActivePinia());
    return getActivePinia()?._s.get(id);
};