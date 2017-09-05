#### Express middleware to force 301 redirect to HTTPS only when after a load balancer (AWS ALB but not only)

Install:
```sh
npm install express-force-ssl-aws
```

Use:
```js
import Express from 'express';
import {expressForceSSLAws} from 'express-force-ssl-aws';

const app = new Express();
app.use(expressForceSSLAws());
```

The library will look for an `x-forwarded-proto`, and if the header exists and it's not `https`, it will force redirect to `https`.
