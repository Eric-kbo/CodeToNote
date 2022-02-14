package a
 import (
    "flag"
    "fmt"
    "os"
)
func main() {
    var image string
    flag.StringVar(&image, "image", "", "Docker image")
    flag.Parse()
    if len(image) == 0 {
        fmt.Fprintf(os.Stderr, "You must specify a Docker image name")
    }
    fmt.Printf("Your Docker image was: %s", image)
}