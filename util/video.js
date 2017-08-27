
const AWS_BASE = "https://s3-us-west-2.amazonaws.com/minidoka-nhs-mobile";

const fullUrl = (name, i) => `${AWS_BASE}/${name}-${i + 1}.m4v`;

export default fullUrl;
