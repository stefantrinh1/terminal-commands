import logo from '../assets/logos/terraformlogo.png'

const command = {
  name: 'terraform',
  displayName: 'Terraform',
  logoUrl: logo,
  description:
    'Terraform is an open-source infrastructure as code software tool created by HashiCorp. It enables users to define and provision a datacenter infrastructure using a high-level configuration language known as Hashicorp Configuration Language, or optionally JSON. Terraform manages external resources such as public cloud infrastructure, private cloud infrastructure, network appliances, software as a service, and platform as a service with a code as a configuration file. Terraform is a tool for building, changing, and versioning infrastructure safely and efficiently. Terraform can manage existing and popular service providers as well as custom in-house solutions',
  commands: [
    {
      commandName: 'Check Terraform Version',
      command: 'terraform -v',
      description: 'Prints the current version of terraform you are using',
    },
    {
      commandName: 'Initialize Terraform',
      command: 'terraform init',
      description:
        'Initialize Terraform. This is the first command that should be run after writing a new Terraform configuration or cloning an existing one from version control. It is safe to run this command multiple times.',
    },
    {
      commandName: 'Validate Terraform Configuration',
      command: 'terraform validate',
      description:
        'Validates the configuration files in a directory, referring only to the configuration and not accessing any remote services such as remote state, provider APIs, etc.',
    },
    {
      commandName: 'Plan Terraform Configuration',
      command: 'terraform plan',
      description:
        'Generates an execution plan for Terraform. The execution plan shows what Terraform will do when you call apply. By default, the plan command creates a human-readable execution plan. This command is a convenient way to check whether the execution plan for a set of changes matches your expectations without making any changes to real resources or to the state.',
    },
    {
      commandName: 'Apply Terraform Configuration',
      command: 'terraform apply',
      description:
        'The apply command executes the actions proposed in a Terraform plan. This will apply the changes required to reach the desired state of the configuration, or the pre-determined set of actions generated by a terraform plan execution plan.',
    },
    {
      commandName: 'Destroy Terraform Configuration',
      command: 'terraform destroy',
      description:
        'The terraform destroy command is a convenient way to destroy all remote objects managed by a particular Terraform configuration. This effectively destroys all the resources that Terraform knows about.',
    },
    {
      commandName: 'Show Terraform State',
      command: 'terraform show',
      description:
        'The terraform show command is used to provide human-readable output from a state or plan file. This can be used to inspect the current state as Terraform sees it or to inspect the changes that are about to be applied.',
    },
    {
      commandName: 'Import Terraform State',
      command: 'terraform import',
      description:
        'The terraform import command is used to import existing infrastructure into Terraform. This allows you to bring pre-existing infrastructure under Terraform management.',
    },
    {
      commandName: 'Output Terraform State',
      command: 'terraform output',
      description:
        'The terraform output command is used to extract the value of an output variable from the state file. This is useful for extracting information from the state file without having to parse the file manually.',
    },
    {
      commandName: 'Refresh Terraform State',
      command: 'terraform refresh',
      description:
        'The terraform refresh command is used to reconcile the state Terraform knows about (via its state file) with the real-world infrastructure. This can be used to detect any drift from the last-known state, and to update the state file.',
    },
    {
      commandName: 'Taint Terraform Resource',
      command: 'terraform taint',
      description:
        "The terraform taint command is used to mark a resource for recreation. This can be used to force the recreation of a resource, even if it hasn't changed.",
    },
    {
      commandName: 'Untaint Terraform Resource',
      command: 'terraform untaint',
      description:
        'The terraform untaint command is used to remove the taint from a resource. This can be used to allow Terraform to manage a resource again, even if it was previously tainted.',
    },
    {
      commandName: 'Workspace Terraform',
      command: 'terraform workspace',
      description:
        'The terraform workspace command is used to manage workspaces in Terraform. Workspaces allow you to manage multiple states for a single configuration.',
    },
    {
      commandName: 'Terraform Format',
      command: 'terraform fmt',
      description:
        'The terraform fmt command is used to rewrite Terraform configuration files to a canonical format and style.',
    },
    // {
    //   commandName: '',
    //   command: '',
    //   description: '',
    // },
  ],
}

export default command
