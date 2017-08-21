
const AWS_BASE = "http://minidoka-nps-ios.s3-website-us-west-2.amazonaws.com/";

const fullUrl = name => `${AWS_BASE}/${name}.m4v`;

export default fullUrl;

