import { JsonService } from '~/src/lib/services';
import { WidgetModel } from '~/src/lib/models';

class WidgetController {
    constructor() {

    }
    list(req, res) {
        WidgetModel.find()
            .then((response) => {
                res.json(JsonService.response(200, response));

            })
    }
}

export default new WidgetController();
