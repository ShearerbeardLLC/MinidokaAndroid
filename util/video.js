
const AWS_BASE = "http://s3-us-west-2.amazonaws.com/minidoka-nps-ios";

const fullUrl = name => `${AWS_BASE}/${name}.m4v`;

export default fullUrl;
