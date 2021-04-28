# Getting started

## How to Build

The generated SDK relies on [Node Package Manager](https://www.npmjs.com/) (NPM) being available to resolve dependencies. If you don't already have NPM installed, please go ahead and follow instructions to install NPM from [here](https://nodejs.org/en/download/).
The SDK also requires Node to be installed. If Node isn't already installed, please install it from [here](https://nodejs.org/en/download/)
> NPM is installed by default when Node is installed

To check if node and npm have been successfully installed, write the following commands in command prompt:

* `node --version`
* `npm -version`

![Version Check](https://apidocs.io/illustration/nodejs?step=versionCheck&workspaceFolder=Netwo%20-%20Eligibility%20API-Node)

Now use npm to resolve all dependencies by running the following command in the root directory (of the SDK folder):

```bash
npm install
```

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency1&workspaceFolder=Netwo%20-%20Eligibility%20API-Node)

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency2)

This will install all dependencies in the `node_modules` folder.

Once dependencies are resolved, you will need to move the folder `NetwoEligibilityAPILib ` in to your `node_modules` folder.

## How to Use

The following section explains how to use the library in a new project.

### 1. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

Click on `File` and select `Open Folder`.

![Open Folder](https://apidocs.io/illustration/nodejs?step=openFolder)

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

![Open Project](https://apidocs.io/illustration/nodejs?step=openProject&workspaceFolder=Netwo%20-%20Eligibility%20API-Node)

### 2. Creating a Test File

Now right click on the folder name and select the `New File` option to create a new test file. Save it as `index.js` Now import the generated NodeJS library using the following lines of code:

```js
var lib = require('lib');
```

Save changes.

![Create new file](https://apidocs.io/illustration/nodejs?step=createNewFile&workspaceFolder=Netwo%20-%20Eligibility%20API-Node)

![Save new file](https://apidocs.io/illustration/nodejs?step=saveNewFile&workspaceFolder=Netwo%20-%20Eligibility%20API-Node)

### 3. Running The Test File

To run the `index.js` file, open up the command prompt and navigate to the Path where the SDK folder resides. Type the following command to run the file:

```
node index.js
```

![Run file](https://apidocs.io/illustration/nodejs?step=runProject&workspaceFolder=Netwo%20-%20Eligibility%20API-Node)


## How to Test

These tests use Mocha framework for testing, coupled with Chai for assertions. These dependencies need to be installed for tests to run.
Tests can be run in a number of ways:

### Method 1 (Run all tests)

1. Navigate to the root directory of the SDK folder from command prompt.
2. Type `mocha --recursive` to run all the tests.

### Method 2 (Run all tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha *` to run all the tests.

### Method 3 (Run specific controller's tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha  Netwo - Eligibility APIController`  to run all the tests in that controller file.

> To increase mocha's default timeout, you can change the `TEST_TIMEOUT` parameter's value in `TestBootstrap.js`.

![Run Tests](https://apidocs.io/illustration/nodejs?step=runTests&controllerName=Netwo%20-%20Eligibility%20APIController)

## Initialization

### Authentication
In order to setup authentication in the API client, you need the following information.

| Parameter | Description |
|-----------|-------------|
| xApiKeyXActorSlug | `X-Api-Key` header should contain an api token. `X-Actor-Slug` should contain an actor slug |



API client can be initialized as following:

```JavaScript
const lib = require('lib');

// Configuration parameters and credentials
lib.Configuration.xApiKeyXActorSlug = "xApiKeyXActorSlug"; // `X-Api-Key` header should contain an api token. `X-Actor-Slug` should contain an actor slug

```



# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [APIController](#api_controller)

## <a name="api_controller"></a>![Class: ](https://apidocs.io/img/class.png ".APIController") APIController

### Get singleton instance

The singleton instance of the ``` APIController ``` class can be accessed from the API Client.

```javascript
var controller = lib.APIController;
```

### <a name="eligibility_request_handler"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.eligibilityRequestHandler") eligibilityRequestHandler

> Trigger an eligibility request for an address and return an {eligibility_id} which can be use to retrieve the eligibility results


```javascript
function eligibilityRequestHandler(callback)
```

#### Example Usage

```javascript


    controller.eligibilityRequestHandler(function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Bad Request |
| 500 | Internal Server Error |




### <a name="eligibility_response_handler"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.eligibilityResponseHandler") eligibilityResponseHandler

> Return a list of eligibility response for a given {eligibility_id}


```javascript
function eligibilityResponseHandler(eligibilityId, customerType, accessFee, debit, infrastructureType, recurringPrice, sortBy, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| eligibilityId |  ``` Required ```  | TODO: Add a parameter description |
| customerType |  ``` Required ```  | TODO: Add a parameter description |
| accessFee |  ``` Optional ```  | TODO: Add a parameter description |
| debit |  ``` Optional ```  | TODO: Add a parameter description |
| infrastructureType |  ``` Optional ```  ``` Collection ```  | TODO: Add a parameter description |
| recurringPrice |  ``` Optional ```  | TODO: Add a parameter description |
| sortBy |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var eligibilityId = uniqid();
    var customerType = Object.keys(customer_type)[0];
    var accessFee = {
        id : 21
    };
    var debit = {
        id : 21
    };
    var infrastructureType = ['infrastructure_type'];
    var recurringPrice = {
        id : 21
    };
    var sortBy = {
        id : 21
    };

    controller.eligibilityResponseHandler(eligibilityId, customerType, accessFee, debit, infrastructureType, recurringPrice, sortBy, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Bad Request |
| 500 | Internal Server Error |




### <a name="eligibility_result_product_handler"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.eligibilityResultProductHandler") eligibilityResultProductHandler

> Return the details about a specific product in the context of an {eligibility_id}


```javascript
function eligibilityResultProductHandler(eligibilityId, productId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| eligibilityId |  ``` Required ```  | TODO: Add a parameter description |
| productId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var eligibilityId = uniqid();
    var productId = uniqid();

    controller.eligibilityResultProductHandler(eligibilityId, productId, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Bad Request |
| 500 | Internal Server Error |




### <a name="eligibility_showcase_handler"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.eligibilityShowcaseHandler") eligibilityShowcaseHandler

> Return the best products for a given {eligibility_id}


```javascript
function eligibilityShowcaseHandler(customerType, eligibilityId, accessFee, debit, infrastructureType, recurringPrice, sortBy, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| customerType |  ``` Required ```  | TODO: Add a parameter description |
| eligibilityId |  ``` Required ```  | TODO: Add a parameter description |
| accessFee |  ``` Optional ```  | TODO: Add a parameter description |
| debit |  ``` Optional ```  | TODO: Add a parameter description |
| infrastructureType |  ``` Optional ```  ``` Collection ```  | TODO: Add a parameter description |
| recurringPrice |  ``` Optional ```  | TODO: Add a parameter description |
| sortBy |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var customerType = Object.keys(customer_type)[0];
    var eligibilityId = eligibility_id;
    var accessFee = {
        id : 21
    };
    var debit = {
        id : 21
    };
    var infrastructureType = ['infrastructure_type'];
    var recurringPrice = {
        id : 21
    };
    var sortBy = {
        id : 21
    };

    controller.eligibilityShowcaseHandler(customerType, eligibilityId, accessFee, debit, infrastructureType, recurringPrice, sortBy, function(error, response, context) {

    
    });
```



### <a name="eligibility_status"></a>![Method: ](https://apidocs.io/img/method.png ".APIController.eligibilityStatus") eligibilityStatus

> Return the status of an eligibility given its {eligibility_id}


```javascript
function eligibilityStatus(eligibilityId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| eligibilityId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var eligibilityId = uniqid();

    controller.eligibilityStatus(eligibilityId, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 400 | Bad Request |
| 500 | Internal Server Error |




[Back to List of Controllers](#list_of_controllers)



