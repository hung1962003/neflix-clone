import { Button, Form, Image, Input, Modal, Table, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import { useEffect, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { useForm } from "antd/es/form/Form";
import uploadFile from "../../utils/upload.js";

function MovieManagement() {
  const columns = [
    {
      title: "Movie-Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Poster-Image",
      dataIndex: "poster_path",
      key: "poster_path",// chỉ in ủrl poster ảnh cần dc render
      render:(poster_path) => <Image src={poster_path} width={500}/>,
    }
  ];
  const [dataSource, setDataSource] = useState([]);

  const [isOpen, setIsOpen] = useState(false);

  const [form] = useForm();
  function handleShowModal() {
    setIsOpen(true);
  }
  function handleCloseModal() {
    setIsOpen(false);
  }

  function handleOk() {
    form.submit();
  }

  async function handleSubmit(values) {
    console.log(values);
    console.log(values.poster_path.file.originFileObj); 
    // day file anh len firebase => dc url
    const url = await uploadFile(values.poster_path.file.originFileObj); // link luu tru Anh tren firebase
    values.poster_path = url;
    console.log(values);
    const response = axios.post(
      "https://665b89a03e4ac90a04d777d2.mockapi.io/Movie",
      values
    );
    setDataSource([...dataSource, response.data]); //re-render lai trang cap nhat lai src
    //clear form
    form.resetFields();
    //hide modal
    handleCloseModal();
  }

  const fetchMovie = async () => {
    const response = await axios.get(
      "https://665b89a03e4ac90a04d777d2.mockapi.io/Movie"
    );
    console.log(response.data);
    setDataSource(response.data);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );
  return (
    <div>
      <Button type="primary" onClick={handleShowModal}>
        add new movie
      </Button>
      <Table dataSource={dataSource} columns={columns} />
      <Modal
        open={isOpen}
        title="add new movie"
        onClose={handleCloseModal}
        onOk={handleOk}
      >
        <Form labelCol={{ span: 24 }} form={form} onFinish={handleSubmit}>
          {/* labelCol giong voi booststrap  khac o cho antd chia thanh 24 col va booststrap chia la 12 */}
          <Form.Item label="Movie-Name" name="name">
            <Input />
          </Form.Item>

          <Form.Item label="Description" name="description">
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item label="Trailer" name="trailer">
            <Input />
          </Form.Item>

          <Form.Item label="Category" name="category">
            <Input />
          </Form.Item>

          <Form.Item label="Poster" name="poster_path">
            <Upload
              action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
            >
              {fileList.length >= 8 ? null : uploadButton}
            </Upload>
          </Form.Item>
        </Form>
      </Modal>

      {previewImage && (
        <Image
          wrapperStyle={{
            display: "none",
          }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(""),
          }}
          src={previewImage}
        />
      )}
    </div>
  );
}

export default MovieManagement;
