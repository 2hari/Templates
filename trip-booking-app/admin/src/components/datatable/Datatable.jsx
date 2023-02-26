import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "$/utils/useFetch";
import ai from "$/utils/axios";
import axios from 'axios'



const Datatable = ({columns}) => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const [list, setList] = useState([]);
  const { data, loading, error } = useFetch(`/${path}`);
  // async function listFetched() {
  //   try{
  //     const res = await API.get(`${import.meta.env.VITE_SERVER_BASE_URL}/${path}`)
  //   }catch(err){
  //     console.log(err)
  //   }
  // }
  // useEffect(() => {
  //   listFetched()
  // },[])


  console.log(data)

  useEffect(() => {
    setList(data);
  }, [data]);

  const handleDelete = async (id) => {
    try {
      await ai.delete(`/${path}/${id}`);
      setList(list.filter((item) => item._id !== id));
    } catch (err) {}
  };

  const userColumn = {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImg"
            src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"}
            alt="avatar"
          />
          {params.row.username}
        </div>
      )
    },
  }

  const columnWithUserRender = columns.map((i) => {
    if(i.field === 'user'){
      return {
          ...i,
          renderCell:(params) => {
            return (
              <div className="cellWithImg">
                <img
                  className="cellImg"
                  src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"}
                  alt="avatar"
                />
                {params.row.username}
              </div>
            )
          }
        }
      }
      return i
  })

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  const columnWithJSX = columnWithUserRender.concat(actionColumn)

  return (
    <div className="datatable">
      <div className="datatableTitle">
        {path}
        <Link to={`/${path}/new`} className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={list}
        columns={columnWithJSX}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  );
};

export default Datatable;
