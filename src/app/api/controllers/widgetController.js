import { WidgetModel } from '~/src/lib/models';
import expressDeliver from 'express-deliver';

const WidgetController = expressDeliver.wrapper({
    list: function(req, res) {
        return WidgetModel.find()
    }
});

export default WidgetController;
