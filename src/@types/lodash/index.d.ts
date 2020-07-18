// d in the file name stands for declarations

import * as lodash from "lodash";

declare module 'lodash' {
    interface LoDashStatic {
        log(item: string): void;
    }
}
