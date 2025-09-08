<List
        dataSource={notes}
        renderItem={(item) => (
          <List.Item
            
            actions={[
              <Button
                type="text"
                icon={<EditOutlined className="icon" />}
                onClick={() => onEdit(item)}
              />,
              <Button
                onClick={() => showDeleteModal(item)}
                type="text"
                icon={<DeleteOutlined className="icon" />}
              />,
            ]}
          >
            <Text style={{ color: "#fff" }}>{item.content}</Text>
          </List.Item>
        )}
      />