provider "github" {
  token = var.token
}

resource "github_repository" "example" {
  name        = "example-repo"
  description = "My awesome codebase"

  visibility = "public"
}

# Add a collaborator to a repository
resource "github_repository_collaborator" "a_repo_collaborator" {
  count      = length(var.organization_developers)
  repository = github_repository.example.name
  username   = var.organization_developers[count.index]
  permission = "admin"

  depends_on = [github_repository.example]
}
