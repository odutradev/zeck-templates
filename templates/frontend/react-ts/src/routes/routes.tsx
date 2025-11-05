// import { Navigate } from "react-router-dom";

import InitialRoute from "@routes/components/initialRoute";
import NotFound from "@pages/notFound";
import Main from "@pages/main";

const routes = [
    {
        path: "/",
        privateRoute: false,
        routes: [
            // ["*", <Navigate to="/not-found" replace/>],
            ['/not-found', <NotFound />],
            ['/main', <InitialRoute />],
            ['/*', <Main />],
        ]
    }
];

export default routes;