import moment from "moment";

function formatDate(date:Date){
  return moment(date).format("DD/MM/YYYY")
}
export { formatDate };
