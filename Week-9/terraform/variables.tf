variable "docker_images" {
  type        = list(string)
  description = "This are the images in my environment"
  default = [
    "hawksdev/g2-yolo-client:1.0.0",
    "hawksdev/g2-yolo-backend:1.0.0",
  ]
}
