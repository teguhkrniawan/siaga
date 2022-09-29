
import React from 'react'
import { Container } from 'react-bootstrap'
import { LayoutUser } from '../components/Layout/Users/LayoutUser'

const Home = () => {

  const fakeList = [
    {
      name: "LONGSOR",
      total: "378.911"
    },
    {
      name: "BANJIR",
      total: "318.911"
    },
    {
      name: "TSUNAMI",
      total: "378.911"
    },
    {
      name: "KARHUTLA",
      total: "111.911"
    },
    {
      name: "GEMPA",
      total: "2.911"
    },
    {
      name: "TORNADO",
      total: "29.911"
    },
    {
      name: "LAINNYA",
      total: "2.911"
    },
  ]

  return (
    <>
      <div className="container-fluid">

        {/* section atas */}
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <h3 className='font-weight-bold' style={{ marginBottom: 20 }}>Informasi Bencana</h3>
            <div className="row">
              {
                fakeList.map((item, index) => {
                  return (
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12" key={index}>
                      <div className="card mb-4 mb-xl-0 mt-4">
                        <div className="card-body">
                          <div className="row">
                            <div className="col">
                              <h5 className="card-title text-uppercase text-muted mb 0">
                                {item.name}
                              </h5>
                              <span className="h2 font-weight-bold mb-0"> {item.total}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>


          <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12" >
            <div className="row">
              {/* section title */}
              <h3 className='font-weight-bold ml-3' style={{ marginBottom: 20 }}>Tabel Kejadian</h3>

              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                {/* section filter */}
                <div className="card mb-4 mb-xl-0 mt-4">
                  <div className="card-group-item">
                    <div className="card-header" style={{ fontSize: '1.125rem' }}>
                      Filter Tabel Kejadian
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="form-group col-md-2">
                          <label htmlFor="tanggal_mulai">Tanggal Awal</label>
                          <div className="input-group">
                            <input type="date" className='datepicker form-control' />
                          </div>
                        </div>
                        <div className="form-group col-md-2">
                          <label htmlFor="tanggal_akhir">Tanggal Akhir</label>
                          <div className="input-group">
                            <input type="date" className='datepicker form-control' />
                          </div>
                        </div>
                        <div className="form-group col-md-3">
                          <label htmlFor="pilih_kecamatan">Pilih Kecamatan</label>
                          <div className="input-group">
                            <select name="" id="" className="form-control">
                              <option value="">--Semua Kecamatan--</option>
                              <option value="1">Bangko</option>
                              <option value="2">Bagan Sinembah</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group col-md-3">
                          <label htmlFor="pilih_kecamatan">Pilih Jenis Bencana</label>
                          <div className="input-group">
                            <select name="" id="" className="form-control">
                              <option value="">--Semua Jenis Bencana--</option>
                              <option value="1">Longsor</option>
                              <option value="2">Banjir</option>
                            </select>
                          </div>
                        </div>

                        <div className="col-md-2">
                          <label className='text-white' style={{ display: 'block' }} htmlFor="pilih_kecamatan">.</label>
                          <button className='btn btn-secondary'><span><i className='fa fa-add'></i>Filter</span></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* section data table */}
                <div className="card mb-4 mb-xl-0 mt-4">
                  <div className="card-group-item">
                    <div className="card-header" style={{ fontSize: '1.125rem' }}>
                      Menampilkan Data Berdasarkan Pilihan
                    </div>
                    <div className="card-body">
                      <div className="row">

                        {/* Tabel */}
                        <div className="col-12">

                          {/* spinner */}
                          <div class="d-flex justify-content-center">
                            <div class="spinner-border text-primary" role="status">
                              <span class="sr-only">Loading...</span>
                            </div>
                          </div>

                          <div className="p-3">
                            <div className="table-responsive">
                              <table className="table table-bordered">
                                <thead>
                                  <tr>
                                    <th>No</th>
                                    <th>Jenis Bencana</th>
                                    <th>Waktu</th>
                                    <th>Lokasi</th>
                                    <th>Penyebab</th>
                                    <th>Kronologi</th>
                                    <th>Detail</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>1</td>
                                    <td>Angin Kencang</td>
                                    <td>Selasa, 27 Oktober 2022. 19:37 WIB</td>
                                    <td>Desa Sikeladi, Kecamatan Bangko <br></br> Koordinast : 127.001987, 98.009125</td>
                                    <td>
                                      Masih dalam penyelidikan pihak berwajib
                                    </td>
                                    <td>
                                      Hujan intensitas Sedang disertai angin kencang yang terjadi di Desa Bandongan,Kecamatan Bandongan pada Hari
                                      Rabu,21 September 2022 Sejak Pukul 14.30 WIB hingga pukul 15.00 WIB menyebabkan 7 rumah warga Dusun Gegunung, Desa Bandongan,
                                      Kecamatan Bandongan mengalami rusak Ringan pada bagian atap
                                    </td>
                                    <td>
                                      <button className='btn btn-sm btn-primary'>Detail</button>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

Home.layout = page => <LayoutUser children={page} title="Homepage" />
export default Home
