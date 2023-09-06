import { proxy } from 'valtio';

const state = proxy({
    show3dOnly:false,
});

export default state;