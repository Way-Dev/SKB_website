import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getIndex(): {
        roadmap: {
            name: string;
            done: boolean;
        }[];
        faq: {
            title: string;
            content: string;
        }[];
    };
}
