import axios from "axios";
const NUMPEOPLE = 100
const BASEURL = `https://randomuser.me/api/?results=${NUMPEOPLE}&nat=us`

export default {
  search: function() {
    return axios.get(BASEURL)
  }
}