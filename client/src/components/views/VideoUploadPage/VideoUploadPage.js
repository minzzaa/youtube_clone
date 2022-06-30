import React from 'react'
import { Typography, Button, Form, message, Input } from 'antd';
import Dropzone from 'react-dropzone';
import { PlusOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { TextArea } = Input;
function VideoUploadPage() {



    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <Title level={2}>Upload Video</Title>
            </div>
            <Form onSubmit>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Dropzone 
                        onDrop 
                        multiple 
                        maxSize>
                        maxSize{({ getRootProps, getInputProps})=> {
                            <div style={{
                                width: '300px', height: '240px', border: '1px solid lightgray', display: 'flex',
                                alignItems:'center', justifyContent: 'center'
                            }} {...getRootProps()}>
                                <input {...getInputProps()} />
                                <PlusOutlined style={{ fontSize: '3rem' }} />
                            </div>
                        }}
                    </Dropzone>
                    <div>
                        <img src alt />
                    </div>
                </div>

                <br />
                <br />
                <label> Title </label>
                <Input 
                    onChange 
                    value>
                </Input>
                <br />
                <br />
                <label> Description </label>
                <TextArea 
                    onChange 
                    value />
                <br />
                <br />
                {/* <select onChange>
                    <option key value>

                    </option>
                </select> */}
                <Button type="primary" size="large" onClick>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default VideoUploadPage;