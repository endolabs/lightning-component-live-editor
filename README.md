# Live Editor for Base Lightning Components

## Dev, Build and Test

TBD

## Resources

TBD

## Description of Files and Directories

TBD

## Issues

TBD

----

## From unmanaged package

TBD

## From deploy-to-sfdx

TBD

## SFDX CLI

0\. If you haven’t already done so, authenticate with your hub org.

```
$ sfdx force:auth:web:login -d -a DevHub
```

1\. Create a new scratch org as "myorg" (any name)

```
$ sfdx force:org:create -f config/project-scratch-def.json -a myorg -v DevHub
```

2\. Push the code to the scratch org

```
$ sfdx force:source:push -u myorg
```

3\. Assign permission set to the scratch org's administration user.  
Note: ``-o`` (``--onhehalfof``) option means comma-separated list of usernames or aliases to assign the permission set to, and "myorg" is an alias of System Administrator User.

```
$ sfdx force:user:permset:assign -n dein -u myorg -o myorg
```

4\. Open the org in your browser

```
$ sfdx force:org:open -u myorg
```
