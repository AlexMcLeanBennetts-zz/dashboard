import moment from 'moment'

export default function usePolicyIsActive(start, end) {

    return (moment().isAfter(start) && moment().isBefore(end)) ? true : false;

}