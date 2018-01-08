# Live Editor for Base Lightning Components

Under construction...

## What is Base Lightning Components?

https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/lightning_overview.htm

> Base Lightning components are the building blocks that make up the modern Lightning Experience, Salesforce app, and Lightning Communities user interfaces.
> Base Lightning components incorporate Lightning Design System markup and classes, providing improved performance and accessibility with a minimum footprint.

## Roadmap

Work in Progres

## Dev, Build and Test

TBD

## Resources

TBD

## Description of Files and Directories

TBD

## Issues

TBD

----

## How to Use

TBD

- from unmanaged package
- from deploy-to-sfdx
- from SFDX CLI

### From unmanaged package

TBD

### From deploy-to-sfdx

TBD

### SFDX CLI

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

## Limitations

Not supported attribute names

- body
- class

Not supported attribute types

- Component[]
- Aura.Action

Not supported components

- ``lightning:flow``
- ``lightning:workspaceAPI``
