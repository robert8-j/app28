#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkPipelineEbDemoStack } from '../lib/cdk-pipeline-eb-demo-stack';

import { CdkPipelineStack } from '../lib/cdk-pipeline-stack';



const app = new cdk.App();

new CdkPipelineStack(app, 'CdkPipelineStack', {
   env: { account: '394661460461', region: 'us-west-2' },
});
app.synth();
