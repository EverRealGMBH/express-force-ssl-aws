import {join} from 'path';

export interface IConfig {
}

export const expressForceSSLAws = () => (req, res, next) => {
  const forwardedProto: string = req.headers['x-forwarded-proto'];

  if (!forwardedProto) {
    return next();
  }

  if (forwardedProto === 'https') {
    return next();
  }

  return res.redirect(301, `https://${join(req.hostname, req.url)}`);
};
