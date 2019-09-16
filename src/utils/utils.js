import moment from 'moment';

export const calculateExpiration = ({dates, daysUntilExpiration} = {}) => {
	const today = moment();
	const opened = moment(dates.opened);
	const expiration = moment(opened, "DD-MM-YYYY").add(daysUntilExpiration.inFridge || 0, 'days');
	const timeLeft = today.subtract(expiration.milliseconds(), "ms");
	if (timeLeft.milliseconds() > 0) {
		return timeLeft.days() || 1;
	}
	return 0; // TODO: manage expired foods, maybe with an icon
}