variable "docker_images" {
  type        = list(string)
  description = "This are the images in my environment"
  default = [
    "hawksdev/g2-yolo-client:1.0.0",
    "hawksdev/g2-yolo-backend:1.0.0",
  ]
}

variable "instances" {
  type = list(string)
  default = [
    "ansible-server",
    "ansible-client-one",
    "ansible-client-two",
  ]
}

variable "token" {
  type    = string
  default = ""
}

variable "project_id" {
  type    = string
  default = ""
}

variable "organization_developers" {
  type    = list(string)
  default = [""]
}
