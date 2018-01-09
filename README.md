# Raidein: Live Editor for Base Lightning Components

:pensive: This application has not been completed yet.

Live (means WYSIWYG) Editor and Showcase for Base Lightning Components.

## What is Base Lightning Components?

https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/lightning_overview.htm

> Base Lightning components are the building blocks that make up the modern Lightning Experience, Salesforce app, and Lightning Communities user interfaces.  
>
> Base Lightning components incorporate Lightning Design System markup and classes, providing improved performance and accessibility with a minimum footprint.

## Installations

- from Salesforce CLI
- from unmanaged package (in future)
- from deploy-to-sfdx (in future)

### from Salesforce CLI

0\. First of all, you must install [Salesforce CLI](https://developer.salesforce.com/ja/tools/sfdxcli). And, if you haven’t already done so, authenticate with your hub org.

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

```
$ sfdx force:user:permset:assign -n raidein -u myorg -o myorg
```

Note: ``-o`` (``--onhehalfof``) option means comma-separated list of usernames or aliases to assign the permission set to, and "myorg" is an alias of System Administrator User.

4\. Open the org in your browser

```
$ sfdx force:org:open -u myorg
```

### From unmanaged package

TBD

### From deploy-to-sfdx

TBD

## Roadmap

Work in Progres

## Limitations

Serveral attributes are not editable.

- attribute names
  - body
  - class
- attribute types
  - Component[]
  - Aura.Action

Not supported components

- ``lightning:flow``
- ``lightning:workspaceAPI``
