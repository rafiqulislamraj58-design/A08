"use client";

import { authClient } from "@/lib/auth-client";

import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";

export function UpdateUser({ onSuccess }) {
  const onSubmit = async (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const image = e.target.image.value
    await authClient.updateUser({ name, image });
    onSuccess?.()
  
  }
  return (
    <Modal>
    <Modal.Trigger>  <Button variant="secondary">Update MyProfile</Button> </Modal.Trigger>
    
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Update MyProfile </Modal.Heading>
              
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form id="update-user-form" onSubmit={onSubmit} className="flex flex-col gap-4">
                  <TextField className="w-full" name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField className="w-full" name="image" type="url">
                    <Label>Image Url</Label>
                    <Input placeholder="https://example.com/photo.jpg" />
                  </TextField>
                </form>
              </Surface>
            </Modal.Body>
            <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button type="submit" form="update-user-form">save</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}