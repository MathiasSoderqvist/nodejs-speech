// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/* eslint-disable */

'use strict';

const {assert} = require('chai');
const {describe, it} = require('mocha');
const cp = require('child_process');

const execSync = cmd => cp.execSync(cmd, {encoding: 'utf-8'});
const storageUri = 'gs://cloud-samples-tests/speech/brooklyn.flac';
const text = 'how old is the Brooklyn Bridge';

describe('multiRegion', () => {
    it('should run multiRegion', async () => {
      const stdout = execSync(`node multiRegion.js ${storageUri}`)
      assert.match(stdout, /Transcription:/ );
    });
});