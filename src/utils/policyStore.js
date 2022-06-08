import { makeObservable, observable } from "mobx";
import { fetchData } from 'utils/services/fetchData.js';


class PolicyStore {
    policyDetails = {};

    constructor() {
        makeObservable(this, {
            policyDetails: observable,

        })
    }

    fetchDataFromServer = async () => {
        this.policyDetails = await fetchData();
    }

}

export const policyStore = new PolicyStore();